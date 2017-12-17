package com.vg.server.controller;

import com.google.gson.Gson;
import com.vg.server.model.Product;
import com.vg.server.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    private static final String DEFAULT_PRODUCT_ID_PARAM = "0";
    private static final String DEFAULT_PRODUCT_COUNT_PARAM = "all";
    private static final String EMPTY_PRODUCT_NAME = "none";
    private static final int DEFAULT_PRODUCT_LIMITED_COUNT = 10;

    @RequestMapping(value = "/product", method=RequestMethod.GET)
    public Product getProduct(@RequestParam(value="id",
            defaultValue= DEFAULT_PRODUCT_ID_PARAM) String idStr) {
        long id;
        Product product;
        try {
            id = Long.parseLong(idStr);
            product = productService.findProductById(id);
        }catch (NumberFormatException nfe){
            id = Long.parseLong(DEFAULT_PRODUCT_ID_PARAM);
            product = productService.findProductById(id);
        }
        return (product == null) ? new Product(EMPTY_PRODUCT_NAME) : product;
    }

    @RequestMapping(value="/products", method=RequestMethod.GET)
    public Iterable<Product> getProducts(@RequestParam(value="count",
            defaultValue= DEFAULT_PRODUCT_COUNT_PARAM) String countStr){
        if(countStr.equals(DEFAULT_PRODUCT_COUNT_PARAM)){
            return productService.getAllProduct();
        }
        int count = 0;
        try {
            count = Integer.parseInt(countStr);
            if(count < 0){
                count = DEFAULT_PRODUCT_LIMITED_COUNT;
            }
        } catch (NumberFormatException nfe){
            count = DEFAULT_PRODUCT_LIMITED_COUNT;
        } finally {
            productService.getProductsLimited(count);
        }
        return productService.getProductsLimited(count);
    }

    @RequestMapping(value="/add/product", method=RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public Product addProduct(@RequestBody String nameJson){
        Gson gson = new Gson();
        Product product = gson.fromJson(nameJson, Product.class);
        product = productService.addProduct(product);
        return product;
    }

    @RequestMapping(value="/update/product", method=RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public int updateProduct(@RequestBody String heroJson){
        Gson gson = new Gson();
        final Product product = gson.fromJson(heroJson, Product.class);
        return productService.updateProduct(product.getId(), product);
    }

    @RequestMapping(value="/delete/product", method=RequestMethod.DELETE)
    public void deleteProduct(@RequestParam(value="id",
            defaultValue = DEFAULT_PRODUCT_ID_PARAM) String idStr){
        long id = 0;
        try {
            id = Long.parseLong(idStr);
        }catch (NumberFormatException nfe){
            id = Long.parseLong(DEFAULT_PRODUCT_ID_PARAM);
        } finally {
            productService.deleteProduct(id);
        }
    }

    @RequestMapping(value = "/products/search/findByName", method= RequestMethod.GET)
    public List<Product> findProductsByName(@RequestParam(value="name") String name) {
        return productService.findProductsByName(name);
    }
}
