package com.vg.server.repository;

import com.vg.server.model.Hero;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "heroes", path = "heroes")
public interface HeroRepository extends CrudRepository<Hero, Long> {

    @Query("from Hero h where lower(h.name) like CONCAT('%', lower(:name), '%')")
    List<Hero> findByName(@Param("name") String name);

    @Query("from Hero h")
    List<Hero> getHeroesLimited(Pageable pageable);

    @Transactional
    @Modifying(clearAutomatically=true)
    @Query("update Hero h set h.name = :newHeroName where h.id = :id")
    int updateHero(@Param("id") long id, @Param("newHeroName") String newHeroName);
}
