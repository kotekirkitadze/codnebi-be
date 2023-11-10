import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Blog } from './schema/blog.schema';
import { InjectModel } from '@nestjs/mongoose';

import { Query } from 'express-serve-static-core';
import mongoose, { Model } from 'mongoose';
import { UpdateBlogDto } from './dto/update-dto';
@Injectable()
export class BlogsService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}

  async findAll(query: Query): Promise<Blog[]> {
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          name: {
            $regex: query.keyword,
            $options: 'i',
          },
        }
      : {};
    const blogs = await this.blogModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);

    return blogs;
  }

  async createBlog(blog: Blog, user?: any): Promise<Blog> {
    // const location = await ApiFeatures.getRestaurantLocations(
    //   restaurant.address,
    // );
    // return this.blogModel.create(
    //   Object.assign(blog, { user: user._id }),
    // );
    user;
    return this.blogModel.create(blog);
  }

  async findBlogById(id: string): Promise<Blog> {
    const blog = this.blogModel.findById(id);
    if (!mongoose.isValidObjectId(id)) {
      throw new BadRequestException(
        'Wrong Mongose ID, Please provide correct id',
      );
    }
    if (!blog) {
      throw new NotFoundException('blog not found');
    }

    return blog;
  }

  async updateBlog(id: string, blog: UpdateBlogDto) {
    return await this.blogModel.findByIdAndUpdate(id, blog, {
      new: true,
      runValidators: true,
    });
  }

  async deleteBlog(id: string) {
    return await this.blogModel.findByIdAndDelete(id);
  }
}
