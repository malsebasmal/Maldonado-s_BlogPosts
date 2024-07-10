import { apiHANDLER } from "../api.js";

class functionsPublicationsDOM {
  static putPublications = () => {
    window.addEventListener("DOMContentLoaded", async () => {
      try {
        const posts = await apiHANDLER.getPOSTS();
        const ulPosts = document.querySelector(".div__ul")
          
        posts.forEach(data => {
          const post = document.createRange().createContextualFragment(/*html*/`
            <li class="ul__li">
              <div class="li__div">
                ${data.bodyPost}
              </div>
              <button class="li__button--view">View</button>
              <button class="li__button--delete">Delete</button>
            </li>
          `)
          ulPosts.appendChild(post)
        })
      } catch (error) {
        console.error("Error fetching data", error)
        throw new Error(error)
      }
    })
  }
}

functionsPublicationsDOM.putPublications()