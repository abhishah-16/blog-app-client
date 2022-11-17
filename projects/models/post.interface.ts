import { Category } from "./category.interface"
import { User } from "./user.interface"

export interface Post {
    id: number
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    slug: string
    category: Category
    user: User
    status?: string
    mainImageUrl: string
}