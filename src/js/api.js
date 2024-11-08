class apiHANDLER {
  static apiURL = "https://api-blogposts-wkrn.onrender.com/posts"
  
  static getPOSTS = async () => {
    try {
      const res = await fetch(this.apiURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      const resJSON = await res.json()
      return resJSON
    } catch (error) {
      console.log("Error getting data", error)
      throw new Error(error)
    }
  }

  static getOnePOST = async (input) => {
    try {
      const res = await fetch(`${this.apiURL}/${input}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      const resJSON = await res.json()
      return resJSON
    } catch (error) {
      console.log("Error getting data", error)
      throw new Error(error)
    }
  }

  static newPOST = async (input) => {
    try {
      const res = await fetch(this.apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
      })
  
      const resJSON = await res.json()
      return resJSON
    } catch (error) {
      console.error("Error posting data", error)
      throw new Error(error)
    }
  }

  static deletePOST = async (input) => {
    try {
      const res = await fetch(`${this.apiURL}/${input}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
    } catch (error) {
      console.error("Error deleting data", error)
      throw new Error(`Error deleting data with ID ${input}`)
    }
  }
}

export {
  apiHANDLER
}