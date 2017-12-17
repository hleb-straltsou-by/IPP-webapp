package com.vg.server.service;

import com.vg.server.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {

    Product findProductById(long id);

    List<Product> findProductsByName(String namePattern);

    List<Product> getProductsLimited(int count);

    Iterable<Product> getAllProduct();

    Product addProduct(Product product);

    int updateProduct(long id, Product product);

    void deleteProduct(long id);
}
