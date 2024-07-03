import { PrismaClient } from '@prisma/client';
import { json } from '@sveltejs/kit';


// create a new Prisma client instance
const prisma = new PrismaClient();


// export the DELETE function
export const DELETE = async ({ request }) => {
    const { id } = await request.json();

    try {

        // delete the post with the given ID
        await prisma.post.delete({
            where: { id: Number(id) }
        });

        return json({ success: true });
    } catch (error) {
        console.error('Error deleting post:', error);
        return json({ success: false, error: 'Failed to delete the post' }, { status: 500 });
    }
};
