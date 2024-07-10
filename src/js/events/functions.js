import { apiHANDLER } from "../api.js";

class functionsDOM {
  static publications = async () => {
    try {
      const posts = await apiHANDLER.getPOSTS();
          
      // const button = document.querySelector(".div__button--submit")
      //   button.addEventListener("click", () => {
      //   console.log(posts)
      // })
    } catch (error) {
      console.error("Error fetching data", error)
      throw new Error(error)
    }
  }

  static publishButton = () => {
    const button = document.querySelector(".div__button--submit")
    button.addEventListener("click", async () => {
      try {
        const textPublish = document.querySelector(".section__textarea").value
        document.querySelector(".section__textarea").value = ""
        //The problem of put specific * key === bodyPost* in the object is from THE API
        await apiHANDLER.newPOST({ bodyPost: textPublish })
      } catch (error) {
        console.error("Error posting data", error)
        throw new Error(error)
      }
    })
  }

  static resetButton = () => {
    const button = document.querySelector(".div__button--reset")
    button.addEventListener("click", () => {
      document.querySelector(".section__textarea").value = ""
    })
  }
  
}

functionsDOM.publications()
functionsDOM.publishButton()
functionsDOM.resetButton()