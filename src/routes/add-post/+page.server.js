import prisma from "$lib/prisma";
import { redirect } from "@sveltejs/kit";


//function for handling the form submission
export const actions = {
    default: async ({ request }) => {
        //parse the form data
        const data = Object.fromEntries(await request.formData());
        let username = data.username;
        let content = data.content;

        //convert the image to base64
        let image = Buffer.from(await data.image.arrayBuffer()).toString('base64');


        //create a new post in the database
        await prisma.post.create({
            data: {
                username,
                content,
                image
            }
        });

        throw redirect(302, "/");
    }
}