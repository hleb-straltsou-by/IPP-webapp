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

    private static final String DEFAULT_HERO_ID_PARAM = "0";

    private static final String DEFAULT_HEROES_COUNT_PARAM = "all";

    private static final String EMPTY_HERO_NAME = "none";

    private static final int DEFAULT_HEROES_LIMITED_COUNT = 10;

    @RequestMapping(value = "/hero", method=RequestMethod.GET)
    public Product getHero(@RequestParam(value="id",
            defaultValue=DEFAULT_HERO_ID_PARAM) String idStr) {
        long id;
        Product product;
        try {
            id = Long.parseLong(idStr);
            product = productService.findHeroById(id);
        }catch (NumberFormatException nfe){
            id = Long.parseLong(DEFAULT_HERO_ID_PARAM);
            product = productService.findHeroById(id);
        }
        return (product == null) ? new Product(EMPTY_HERO_NAME) : product;
    }

    @RequestMapping(value="/heroes", method=RequestMethod.GET)
    public Iterable<Product> getHeroes(@RequestParam(value="count",
            defaultValue=DEFAULT_HEROES_COUNT_PARAM) String countStr){
        if(countStr.equals(DEFAULT_HEROES_COUNT_PARAM)){
            return productService.getAllHeroes();
        }
        int count = 0;
        try {
            count = Integer.parseInt(countStr);
            if(count < 0){
                count = DEFAULT_HEROES_LIMITED_COUNT;
            }
        } catch (NumberFormatException nfe){
            count = DEFAULT_HEROES_LIMITED_COUNT;
        } finally {
            productService.getHeroesLimited(count);
        }
        return productService.getHeroesLimited(count);
    }

    @RequestMapping(value="/add/hero", method=RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public Product addHero(@RequestBody String nameJson){
        Gson gson = new Gson();
        Product product = gson.fromJson(nameJson, Product.class);
        product = productService.addHero(product);
        return product;
    }

    @RequestMapping(value="/update/hero", method=RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public int updateHero(@RequestBody String heroJson){
        Gson gson = new Gson();
        final Product product = gson.fromJson(heroJson, Product.class);
        return productService.updateHero(product.getId(), product);
    }

    @RequestMapping(value="/delete/hero", method=RequestMethod.DELETE)
    public void deleteHero(@RequestParam(value="id",
            defaultValue = DEFAULT_HERO_ID_PARAM) String idStr){
        long id = 0;
        try {
            id = Long.parseLong(idStr);
        }catch (NumberFormatException nfe){
            id = Long.parseLong(DEFAULT_HERO_ID_PARAM);
        } finally {
            productService.deleteHero(id);
        }
    }

    @RequestMapping(value = "/heroes/search/findByName", method= RequestMethod.GET)
    public List<Product> findHeroesByName(@RequestParam(value="name") String name) {
        return productService.findHeroesByName(name);
    }
}
