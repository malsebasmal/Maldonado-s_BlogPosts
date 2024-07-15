import { apiHANDLER } from "../api.js";

class functionsPublicationsDOM {
  static putPublications = () => {
    window.addEventListener("DOMContentLoaded", async () => {
      try {
        const posts = await apiHANDLER.getPOSTS();
        const ulPosts = document.querySelector(".div__ul")
        const postsLasted = posts.reverse()
        postsLasted.forEach(data => {
          const post = document.createRange().createContextualFragment(/*html*/`
            <li data-id=${data._id} class="ul__li">
              <div class="li__div">
                ${data.bodyPost}
              </div>
              <button class="li__button--view">View</button>
              <button class="li__button--delete">Delete</button>
            </li>
          `)
          ulPosts.appendChild(post)
        })

        this.buttonDelete()
        this.buttonView()
      } catch (error) {
        console.error("Error fetching data", error)
        throw new Error(error)
      }
    })
  }

  static buttonDelete = () => {
    const deleteButtons = document.querySelectorAll(".li__button--delete")
    deleteButtons.forEach(button => {
      button.addEventListener("click", async () => {
        try {
          const postTarget = event.target.closest(".ul__li")
          const postId = postTarget.getAttribute("data-id")
          
          await apiHANDLER.deletePOST(postId)
          postTarget.remove();
        } catch (error) {
          console.error("Error deleting post", error)
          throw new Error(error)
        }
      })
    })
  }

  static buttonView = () => {
    const viewButtons = document.querySelectorAll(".li__button--view")
    viewButtons.forEach(button => {
      button.addEventListener("click", async () => {
        try {
          const postTarget = event.target.closest(".ul__li")
          const postId = postTarget.getAttribute("data-id")
          const post = await apiHANDLER.getOnePOST(postId)
          console.log(post)
          const modalPostView = new bootstrap.Modal(document.getElementById("modalPostView"))
          modalPostView.show()
          const bodyPost = document.querySelector(".modal-body")
          bodyPost.textContent = post.bodyPost
        } catch (error) {
          console.error("Error deleting post", error)
          throw new Error(error)
        }
      })
    })
  }
}

functionsPublicationsDOM.putPublications()
functionsPublicationsDOM.buttonDelete()
functionsPublicationsDOM.buttonView()