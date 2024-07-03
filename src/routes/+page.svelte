<script>
  import Swal from "sweetalert2";

  export let data;

  // Function to show a success alert
  const showSuccessAlert = () => {
    Swal.fire({
      title: "Success",
      text: "Post deleted successfully",
      buttonsStyling: true,
      confirmButtonClass: "btn btn-success",
      icon: "success",
    });
  };

  // Function to delete a post
  const deletePost = async (postId) => {
    try {
      // Send delete request to the server
      const response = await fetch("/delete-post", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: postId }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete the post");
      }

      const result = await response.json();
      if (result.success) {
        // Remove the post from the local state
        data.posts = data.posts.filter((post) => post.id !== postId);

        // Show a sweet alert
        showSuccessAlert();
      } else {
        console.error("Failed to delete the post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
</script>

<header class="bg-white py-4 shadow-md sticky top-0 z-10">
  <div class="container mx-auto px-4 flex justify-between items-center">
    <h1 class="text-2xl font-['Poppins']">SvelteKit + Prisma CRUDs</h1>
    <a
      href="/add-post"
      class="bg-blue-500 hover:bg-blue-700 text-white font-medium font-['Poppins'] py-2 px-4 rounded"
      >Add post</a
    >
  </div>
</header>

<div class="container mx-auto md:my-5 px-4">
  <!-- Show the posts -->
  {#if data.posts.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Loop through the posts -->
      {#each data.posts as post}
        <div
          class="border border-gray-300 rounded-lg p-4 flex flex-col justify-between"
        >
          <!-- Show the image -->
          <img
            class="w-full"
            src={`data:image;base64,${post.image}`}
            alt="Post"
          />
          <div class="flex justify-between items-end py-2 mt-4">
            <div>
              <!-- Show the username and content -->
              <span class="font-medium font-['Poppins']">{post.username}</span>
              <span class="text-gray-500 font-['Poppins']">{post.content}</span>
            </div>

            <!-- Show the delete button -->
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 ml-4 rounded font-['Poppins']"
              on:click={() => deletePost(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <!-- Show a message if no posts found -->
    <div class="text-center py-10">
      <p class="text-gray-500 font-['Poppins'] text-lg mt-4 text-center">
        No posts found
      </p>
    </div>
  {/if}
</div>
