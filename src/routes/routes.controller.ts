import { Controller, Get, Query } from '@nestjs/common';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {
    constructor(private routesService: RoutesService){}

    @Get()
    findOptimumRoutes(@Query('from') from:string, @Query('to') to:string ){
        return this.routesService.findOptimumRoutes(from, to)
    }
}
