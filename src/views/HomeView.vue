<template>
  <body>
    <main role="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1>Page One</h1>
          <p class="lead text-muted">
            Page One Books 自 1981年创立，是一家本地独立经营的书店，向客户提供新书和旧书。我们有适合所有年龄段、各个类别的书籍！我们的店员很乐意帮助您寻找所需的书。如果我们没有存货，我们可以为您订购。我们支持使用现金或信用卡购买书籍，请查看我们的购买页面。
          </p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  src="https://cdn.shopify.com/s/files/1/2078/5049/products/audiobooks_740x.jpg?v=1641329103"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  src="https://cdn.shopify.com/s/files/1/2078/5049/products/Drewitz-220302-23_0611ca5f-2aed-4648-addb-3e9c0a20641e_540x.jpg?v=1658816706"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  src="https://cdn.shopify.com/s/files/1/2078/5049/files/Drewitz-210513-5_480x480.jpg?v=1622043181"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.jumbotron {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #fff;
}
@media (min-width: 768px) {
  .jumbotron {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron h1 {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
}
</style>
