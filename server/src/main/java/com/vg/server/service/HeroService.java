package com.vg.server.service;

import com.vg.server.model.Hero;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface HeroService {

    Hero findHeroById(long id);

    List<Hero> findHeroesByName(String namePattern);

    List<Hero> getHeroesLimited(int count);

    Iterable<Hero> getAllHeroes();

    Hero addHero(Hero hero);

    int updateHero(long id, Hero hero);

    void deleteHero(long id);
}
