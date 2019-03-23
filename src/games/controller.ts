import { Game } from './entity'
import {
    Get,
    Body,
    Post,
    Param,
    Patch,
    HttpCode,
    BodyParam,
    NotFoundError,
    JsonController,
    BadRequestError
} from 'routing-controllers'
import { defaultBoard, moves, color, randomColor } from './gameLogic'


@JsonController()
export default class GameController {

    @Get('/games')
    @HttpCode(200)
    async allGames() {
        const games: Game[] = await Game.find()
        return { games }
    }

    //Want to know if this is also valid like the get games by id
    //@get('/games)
    //@HttpCode(200)
    //async allGames() {
    //return Game.find()
    //}

    @Get('/games/:id')
    getGame(
        @Param('id') id: number
    ) {
        return Game.findOne(id)
    }

    @Post('/games')
    @HttpCode(201)
    async createGame(
        @BodyParam('name') name: string
    ) {
        const newGame = await new Game()
        newGame.name = await name
        newGame.color = await randomColor(color)
        newGame.board = defaultBoard
        return newGame.save()
    }

    @Patch('/games/:id')
    async updateGame(
        @Param('id') id: number,
        @Body() update: Partial<Game>
    ) {
        const game = await Game.findOne(id)
        if (!game) throw new NotFoundError('this game does not exist')
        if (update.board) {
            if (moves(game.board, update.board) > 1)
                throw new BadRequestError('It is not your turn')
        }
        return Game.merge(game, update).save()
    }


}
