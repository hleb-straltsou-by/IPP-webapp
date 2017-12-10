package com.vg.server.service;

import com.vg.server.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {

    Product findHeroById(long id);

    List<Product> findHeroesByName(String namePattern);

    List<Product> getHeroesLimited(int count);

    Iterable<Product> getAllHeroes();

    Product addHero(Product product);

    int updateHero(long id, Product product);

    void deleteHero(long id);
}
