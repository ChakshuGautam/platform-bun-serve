import { Body, Controller, Get, Post } from "@nestjs/common";

    
@Controller()
export default class AppController {
    @Get("/hello")
    getHello(): string {
        return "Hello world!"
    }

    @Post("/post")
    postIt(@Body() myBody: any): any {
        return myBody;
    }

    @Get("/")
    get(): string {
        return "H"
    }

}