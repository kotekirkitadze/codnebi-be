import { Controller, Get, Query } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { BlogsService } from './blogs.service';
import { Blog } from './schema/blog.schema';
@Controller('blogs')
export class BlogsController {
  constructor(private restaurant: BlogsService) {}
  @Get()
  async getAllBlogs(@Query() query: ExpressQuery): Promise<Blog[]> {
    return this.restaurant.findAll(query);
  }
}
