package com.vg.server.service;

import com.vg.server.model.Product;
import com.vg.server.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HsqldbProductService implements ProductService {

    @Autowired
    private ProductRepository repository;

    @Override
    public Product findProductById(long id) {
        return repository.findOne(id);
    }

    @Override
    public List<Product> findProductsByName(String namePattern) {
        return repository.findByName(namePattern);
    }

    @Override
    public List<Product> getProductsLimited(int count) {
        return repository.getProductsLimited(new PageRequest(0, count));
    }

    @Override
    public Iterable<Product> getAllProduct() {
        return repository.findAll();
    }

    @Override
    public Product addProduct(Product product) {
        return repository.save(product);
    }

    @Override
    public int updateProduct(long id, Product product) {
        return repository.updateProduct(id, product.getName());
    }

    @Override
    public void deleteProduct(long id) {
        repository.delete(id);
    }
}
