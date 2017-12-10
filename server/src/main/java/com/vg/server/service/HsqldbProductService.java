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
    public Product findHeroById(long id) {
        return repository.findOne(id);
    }

    @Override
    public List<Product> findHeroesByName(String namePattern) {
        return repository.findByName(namePattern);
    }

    @Override
    public List<Product> getHeroesLimited(int count) {
        return repository.getHeroesLimited(new PageRequest(0, count));
    }

    @Override
    public Iterable<Product> getAllHeroes() {
        return repository.findAll();
    }

    @Override
    public Product addHero(Product product) {
        return repository.save(product);
    }

    @Override
    public int updateHero(long id, Product product) {
        return repository.updateHero(id, product.getName());
    }

    @Override
    public void deleteHero(long id) {
        repository.delete(id);
    }
}
