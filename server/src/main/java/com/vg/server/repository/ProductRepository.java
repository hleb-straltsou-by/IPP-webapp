package com.vg.server.repository;

import com.vg.server.model.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "heroes", path = "heroes")
public interface ProductRepository extends CrudRepository<Product, Long> {

    @Query("from Product p where lower(p.name) like CONCAT('%', lower(:name), '%')")
    List<Product> findByName(@Param("name") String name);

    @Query("from Product p")
    List<Product> getHeroesLimited(Pageable pageable);

    @Transactional
    @Modifying(clearAutomatically=true)
    @Query("update Product p set p.name = :newName where p.id = :id")
    int updateHero(@Param("id") long id, @Param("newHeroName") String newName);
}
