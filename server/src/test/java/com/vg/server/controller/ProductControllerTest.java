package com.vg.server.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    private static final String PRODUCT_NAME_JSON_PATH = "$.name";
    private static final String PRODUCT_ARRAY_SIZE_JSON_PATH = "$";
    private static final String EMPTY_PRODUCT_NAME = "none";
    private static final String PRODUCT_ID_PARAM = "id";
    private static final String PRODUCT_COUNT_PARAM = "count";
    private static final String PRODUCT_NAME_PARAM = "name";

    private static final int DEFAULT_PRODUCT_LIMITED_COUNT = 10;
    private static final int MAX_PRODUCT_LIMITED_COUNT = 16;

    @Test
    public void noParamProductShouldReturnDefaultProduct() throws Exception {
        final String urlTemplate = "/api/product";

        this.mockMvc.perform(get(urlTemplate))
                .andExpect(status().isOk())
                .andExpect(jsonPath(PRODUCT_NAME_JSON_PATH).value(EMPTY_PRODUCT_NAME));
    }

    @Test
    public void validParamProductShouldReturnExistProduct() throws Exception {
        final String urlTemplate = "/api/product";
        final String idParam = "11";
        final String expectedName = "Dynama";

        this.mockMvc.perform(get(urlTemplate).param(PRODUCT_ID_PARAM, idParam))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath(PRODUCT_NAME_JSON_PATH).value(expectedName));
    }

    @Test
    public void illegalParamProductShouldReturnDefaultProduct() throws Exception {
        final String urlTemplate = "/api/product";
        final String idParam = "illegal";

        this.mockMvc.perform(get(urlTemplate).param(PRODUCT_ID_PARAM, idParam))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath(PRODUCT_NAME_JSON_PATH).value(EMPTY_PRODUCT_NAME));
    }

    @Test
    public void illegalParamProductShouldReturnDefaultProductCount() throws Exception {
        final String urlTemplate = "/api/products";
        final String countParam = "-7";
        final int expectedCount = DEFAULT_PRODUCT_LIMITED_COUNT;

        this.mockMvc.perform(get(urlTemplate).param(PRODUCT_COUNT_PARAM, countParam))
                .andExpect(status().isOk())
                .andExpect(jsonPath(PRODUCT_ARRAY_SIZE_JSON_PATH, hasSize(expectedCount)));
    }

    @Test
    public void noParamProductsShouldReturnAllProductsCount() throws Exception {
        final String urlTemplate = "/api/products";
        final int expectedCount = MAX_PRODUCT_LIMITED_COUNT;

        this.mockMvc.perform(get(urlTemplate))
                .andExpect(status().isOk())
                .andExpect(jsonPath(PRODUCT_ARRAY_SIZE_JSON_PATH, hasSize(expectedCount)));
    }

    @Test
    public void addProductShouldReturnCorrespondProductWithCorrespondId() throws Exception {
        final String urlTemplate = "/api/add/product";
        final String expectedName = "testName";
        final int expectedId = 17;

        String nameJson = "{ " + PRODUCT_NAME_PARAM + " : \"" + expectedName + "\" }";

        this.mockMvc.perform(post(urlTemplate)
                .content(nameJson))
                .andExpect(status().isOk())
                .andExpect(jsonPath(PRODUCT_NAME_JSON_PATH).value(expectedName))
                .andExpect(jsonPath(PRODUCT_ID_PARAM).value(expectedId));

        final String deleteUrlTemplate = "/api/delete/product";
        final String addedProductId = "17";
        this.mockMvc.perform(delete(deleteUrlTemplate).param(PRODUCT_ID_PARAM, addedProductId))
                .andExpect(status().isOk());
    }

    @Test
    public void findProductsByNameShouldReturnCorrespondListOfProducts() throws Exception {
        final String urlTemplate = "/api/products/search/findByName";
        final String nameParam = "b";
        final int expectedListSize = 5;

        this.mockMvc.perform(get(urlTemplate).param(PRODUCT_NAME_PARAM, nameParam))
                .andExpect(status().isOk())
                .andExpect(jsonPath(PRODUCT_ARRAY_SIZE_JSON_PATH, hasSize(expectedListSize)));
    }
}
