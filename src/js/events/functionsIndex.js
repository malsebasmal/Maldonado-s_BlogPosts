import { apiHANDLER } from "../api.js";

class functionsIndexDOM {
  static publishButton = () => {
    const button = document.querySelector(".div__button--submit")
    button.addEventListener("click", async () => {
      const textPublish = document.querySelector(".section__textarea").value
      if (!textPublish.trim()) {
        const modalAlertError = new bootstrap.Modal(document.getElementById("modalAlertError"))
        modalAlertError.show()
        document.querySelector(".section__textarea").focus()
        return
      }
      try {
        document.querySelector(".section__textarea").value = ""
        //The problem of put specific * key === bodyPost* in the object is from THE API
        const modalCheckPublish = new bootstrap.Modal(document.getElementById("modalCheckPublish"))
        modalCheckPublish.show()
        await apiHANDLER.newPOST({ bodyPost: textPublish })
        document.querySelector(".section__textarea").focus()
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
  
  static modalButtonViewPost = () => {
    const viewPost = document.querySelector(".button__ViewPost")
    viewPost.addEventListener("click", () => {
      window.location.href = "pages/publications.html"
    })
  }

  static modalButtonOtherPost = () => {
    const otherPost = document.querySelector(".button__OtherPost");
    otherPost.addEventListener("click", () => {
      const modalCheckPublish = document.getElementById("modalCheckPublish")
      const modalCheckPublishInstance = bootstrap.Modal.getInstance(modalCheckPublish)
      modalCheckPublishInstance.hide()
      document.querySelector(".section__textarea").focus();
    })
  }
}

functionsIndexDOM.publishButton()
functionsIndexDOM.resetButton()
functionsIndexDOM.modalButtonViewPost()
functionsIndexDOM.modalButtonOtherPost()