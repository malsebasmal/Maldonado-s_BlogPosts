class apiHANDLER {
  static apiURL = "https://maldonado-sblogpostsback-production.up.railway.app/posts"
  
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
}

export {
  apiHANDLER
}