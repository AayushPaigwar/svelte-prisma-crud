
import prisma from "$lib/prisma";
export const load = (async () => {


    //fetch all posts from the database
    const result = await prisma.post.findMany({
        //new posts first
        orderBy: {
            createdAt: 'desc'
        },
    })

    return {
        posts: result
    }
})
