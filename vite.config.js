build: {
  outDir: "../dist",
  rollupOptions 
    input: {
      main: resolve(__dirname, "src/index.html"),
      cart(__dirname, "src/cart/index.html"),
      checkout(__dirname, "src/checkout/index.html"),
      product (__dirname, "src/product_pages/index.html"
      )

    }
  }
