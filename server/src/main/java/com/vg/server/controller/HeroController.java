package com.vg.server.controller;

import com.google.gson.Gson;
import com.vg.server.model.Hero;
import com.vg.server.service.HeroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class HeroController {

    @Autowired
    private HeroService heroService;

    private static final String DEFAULT_HERO_ID_PARAM = "0";

    private static final String DEFAULT_HEROES_COUNT_PARAM = "all";

    private static final String EMPTY_HERO_NAME = "none";

    private static final int DEFAULT_HEROES_LIMITED_COUNT = 10;

    @RequestMapping(value = "/hero", method=RequestMethod.GET)
    public Hero getHero(@RequestParam(value="id",
            defaultValue=DEFAULT_HERO_ID_PARAM) String idStr) {
        long id;
        Hero hero;
        try {
            id = Long.parseLong(idStr);
            hero = heroService.findHeroById(id);
        }catch (NumberFormatException nfe){
            id = Long.parseLong(DEFAULT_HERO_ID_PARAM);
            hero = heroService.findHeroById(id);
        }
        return (hero == null) ? new Hero(EMPTY_HERO_NAME) : hero;
    }

    @RequestMapping(value="/heroes", method=RequestMethod.GET)
    public Iterable<Hero> getHeroes(@RequestParam(value="count",
            defaultValue=DEFAULT_HEROES_COUNT_PARAM) String countStr){
        if(countStr.equals(DEFAULT_HEROES_COUNT_PARAM)){
            return heroService.getAllHeroes();
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
            heroService.getHeroesLimited(count);
        }
        return heroService.getHeroesLimited(count);
    }

    @RequestMapping(value="/add/hero", method=RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public Hero addHero(@RequestBody String nameJson){
        Gson gson = new Gson();
        Hero hero = gson.fromJson(nameJson, Hero.class);
        hero = heroService.addHero(hero);
        return hero;
    }

    @RequestMapping(value="/update/hero", method=RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public int updateHero(@RequestBody String heroJson){
        Gson gson = new Gson();
        final Hero hero = gson.fromJson(heroJson, Hero.class);
        return heroService.updateHero(hero.getId(), hero);
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
            heroService.deleteHero(id);
        }
    }

    @RequestMapping(value = "/heroes/search/findByName", method= RequestMethod.GET)
    public List<Hero> findHeroesByName(@RequestParam(value="name") String name) {
        return heroService.findHeroesByName(name);
    }
}
