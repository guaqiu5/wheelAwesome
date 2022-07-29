module.exports = {
    get url() {
        return this.request.url
    },
    get body() {
        return this.request.body
    },
    set body(v) {
        this.response.body = this.body
    },
    get method() {
        return this.request.method
    }

}