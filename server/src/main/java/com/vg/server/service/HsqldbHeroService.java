package com.vg.server.service;

import com.vg.server.model.Hero;
import com.vg.server.repository.HeroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HsqldbHeroService implements HeroService {

    @Autowired
    private HeroRepository repository;

    @Override
    public Hero findHeroById(long id) {
        return repository.findOne(id);
    }

    @Override
    public List<Hero> findHeroesByName(String namePattern) {
        return repository.findByName(namePattern);
    }

    @Override
    public List<Hero> getHeroesLimited(int count) {
        return repository.getHeroesLimited(new PageRequest(0, count));
    }

    @Override
    public Iterable<Hero> getAllHeroes() {
        return repository.findAll();
    }

    @Override
    public Hero addHero(Hero hero) {
        return repository.save(hero);
    }

    @Override
    public int updateHero(long id, Hero hero) {
        return repository.updateHero(id, hero.getName());
    }

    @Override
    public void deleteHero(long id) {
        repository.delete(id);
    }
}
