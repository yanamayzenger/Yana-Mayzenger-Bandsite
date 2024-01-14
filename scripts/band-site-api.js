class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com";
  }
  async postComment(comment) {
    const response = await axios.post(
      `${this.baseUrl}/comments?api_key=${this.apiKey}`,
      comment
    );
    return response.data;
  }
  async getComments() {
    const response = await axios.get(
      `${this.baseUrl}/comments?api_key=${this.apiKey}`
    );
    return response.data.sort((a, b) => b.timestamp - a.timestamp);
  }

  async getShows() {
    const response = await axios.get(
      `${this.baseUrl}/showdates?api_key=${this.apiKey}`
    );
    return response.data;
  }
}
