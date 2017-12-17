'use strict'; // necessary for es6 output in node
import { browser, element, by, ElementFinder, ElementArrayFinder } from 'protractor';
import { promise } from 'selenium-webdriver';

const expectedH1 = 'Institute of plant protection';
const expectedTitle = 'Institute of plant protection';
const target = { id: 4, name: 'БЕЙТОН, ВГ(2,4-Д, 800 г/кг),ф. Нуфарм ГмбХ иКо КГ, Австрия(П-4)' };
const targetDashboardIndex = 3;
const nameSuffix = 'X';
const newName = target.name + nameSuffix;
const Count = 16;
const searchTarget = {id: 4, name: 'БЕЙТОН, ВГ(2,4-Д, 800 г/кг),ф. Нуфарм ГмбХ иКо КГ, Австрия(П-4)''};

class  {
  id: number;
  name: string;

  // Factory methods
  // Product from string formatted as '<id> <name>'.
  static fromString(s: string):  {
    return {
      id: +s.substr(0, s.indexOf(' ')),
      name: s.substr(s.indexOf(' ') + 1),
    };
  }

  // Product from Product list <li> element.
  static async fromLi(li: ElementFinder): Promise<> {
      let strings = await li.all(by.xpath('span')).getText();
      return { id: +strings[0], name: strings[1] };
  }

  // Product id and name from the given detail element.
  static async fromDetail(detail: ElementFinder): Promise<Product> {
    // Get Product id from the first <div>
    let _id = await detail.all(by.css('div')).first().getText();
    // Get name from the h2
    let _name = await detail.element(by.css('h2')).getText();
    return {
        id: +_id.substr(_id.indexOf(' ') + 1),
        name: _name.substr(0, _name.lastIndexOf(' '))
    };
  }
}

describe('End-to-end tests for app', () => {

  beforeAll(() => browser.get(''));

  describe('Initial page', () => {

    it(`has title '${expectedTitle}'`, () => {
        expect(browser.getTitle()).toEqual(expectedTitle);
    });

    it(`has h1 '${expectedH1}'`, () => {
        expectHeading(1, expectedH1);
    });

    const expectedViewNames = ['Dashboard', 'Productes'];
    it(`has views ${expectedViewNames}`, () => {
      let viewNames = getPageElts().navElts.map((el: ElementFinder) => el.getText());
      expect(viewNames).toEqual(expectedViewNames);
    });

    it('has dashboard as the active view', () => {
      let page = getPageElts();
      expect(page.myDashboard.isPresent()).toBeTruthy();
    });

  });

  describe('Dashboard tests', () => {

    beforeAll(() => browser.get(''));

    it('has top Productes', () => {
      let page = getPageElts();
      expect(page.topProductes.count()).toEqual(4);
    });

    it(`selects and routes to ${targetProduct.name} details`, dashboardSelectTargetProduct);

    it(`updates Product name (${newProductName}) in details view`, updateProductNameInDetailView);

    it(`cancels and shows ${targetProduct.name} in Dashboard`, () => {
      element(by.buttonText('Back')).click();
      browser.waitForAngular(); // seems necessary to gets tests to past for toh-pt6
      let targetProductElt = getPageElts().topProductes.get(targetProductDashboardIndex);
      expect(targetProductElt.getText()).toEqual(targetProduct.name);
    });

    it(`selects and routes to ${targetProduct.name} details`, dashboardSelectTargetProduct);

  });

  describe('Productes tests', () => {

    beforeAll(() => browser.get(''));

    it('can switch to Productes view', () => {
      getPageElts().myProductesHref.click();
      let page = getPageElts();
      expect(page.myProductes.isPresent()).toBeTruthy();
      expect(page.allProductes.count()).toEqual(ProductCount, 'number of Productes');
    });

    it(`selects and shows ${targetProduct.name} as selected in list`, () => {
      getProductLiEltById(targetProduct.id).click();
      expect(Product.fromLi(getPageElts().selectedProduct)).toEqual(targetProduct);
    });

    it('shows selected Product subview', () => {
      let page = getPageElts();
      let title = page.selectedProductSubview.element(by.css('h2')).getText();
      let expectedTitle = `${targetProduct.name.toUpperCase()} is my Product`;
      expect(title).toEqual(expectedTitle);
    });

    it('can route to Product details', () => {
      element(by.buttonText('View Details')).click();

      let page = getPageElts();
      expect(page.ProductDetail.isPresent()).toBeTruthy('shows Product detail');
      let Product = Product.fromDetail(page.ProductDetail);
      expect(Product).toEqual(targetProduct);
    });

    it(`updates Product name (${newProductName}) in details view`, updateProductNameInDetailView);

    it(`shows ${newProductName} in Productes list`, () => {
      element(by.buttonText('Save')).click();
      browser.waitForAngular(); // seems necessary to gets tests to past for toh-pt6
      let expectedProduct = {id: targetProduct.id, name: newProductName};
      expect(Product.fromLi(getProductLiEltById(targetProduct.id))).toEqual(expectedProduct);
    });

    it(`deletes ${newProductName} from Productes list`, async () => {
      const ProductesBefore = await toProductArray(getPageElts().allProductes);
      const li = getProductLiEltById(targetProduct.id);
      li.element(by.buttonText('x')).click();

      const page = getPageElts();
      expect(page.myProductes.isPresent()).toBeTruthy();
      expect(page.allProductes.count()).toEqual(ProductCount - 1, 'number of Productes');
      const ProductesAfter = await toProductArray(page.allProductes);
      const expectedProductes =  ProductesBefore.filter(h => h.name !== newProductName);
      expect(ProductesAfter).toEqual(expectedProductes);
      expect(page.selectedProductSubview.isPresent()).toBeFalsy();
    });

    it(`adds back ${targetProduct.name}`, async () => {
      const newProductName = 'Alice';
      const ProductesBefore = await toProductArray(getPageElts().allProductes);
      const numProductes = ProductesBefore.length;

      element(by.css('input')).sendKeys(newProductName);
      element(by.buttonText('Add')).click();

      let page = getPageElts();
      let ProductesAfter = await toProductArray(page.allProductes);
      expect(ProductesAfter.length).toEqual(numProductes + 1, 'number of Productes');

      expect(ProductesAfter.slice(0, numProductes)).toEqual(ProductesBefore, 'Old Productes are still there');

      const maxId = ProductesBefore[ProductesBefore.length - 1].id;
      expect(ProductesAfter[numProductes]).toEqual({id: maxId + 1, name: newProductName});
    });
  });

  describe('Progressive Product search', () => {

    beforeAll(() => browser.get(''));

    it(`searches for 'Ce'`, async () => {
      getPageElts().searchBox.sendKeys('Ce');
      browser.sleep(1000);
      expect(getPageElts().searchResults.count()).toBe(3);
    });

    it(`continues search with 'l'`, async () => {
      getPageElts().searchBox.sendKeys('l');
      browser.sleep(1000);
      expect(getPageElts().searchResults.count()).toBe(1);
    });
  });

  function dashboardSelectTargetProduct() {
    let targetProductElt = getPageElts().topProductes.get(targetProductDashboardIndex);
    expect(targetProductElt.getText()).toEqual(targetProduct.name);
    targetProductElt.click();
    browser.waitForAngular(); // seems necessary to gets tests to past for toh-pt6
    let page = getPageElts();
    expect(page.ProductDetail.isPresent()).toBeTruthy('shows Product detail');
    let Product = Product.fromDetail(page.ProductDetail);
    expect(Product).toEqual(targetProduct);
  }

});

function getPageElts() {
    let navElts = element.all(by.css('app-root nav a'));

    return {
      navElts: navElts,

      myDashboardHref: navElts.get(0),
      myDashboard: element(by.css('app-root my-dashboard')),
      topProductes: element.all(by.css('app-root my-dashboard > div h4')),

      myProductesHref: navElts.get(1),
      myProductes: element(by.css('app-root my-Productes')),
      allProductes: element.all(by.css('app-root my-Productes li')),
      selectedProduct: element(by.css('app-root li.selected')),
      selectedProductSubview: element(by.css('app-root my-Productes > div:last-child')),

      ProductDetail: element(by.css('app-root Product-detail > div')),

      searchBox: element(by.css('#search-box')),
      searchResults: element.all(by.css('.search-result'))
    };
  }

function addToProductName(text: string): promise.Promise<void> {
  let input = element(by.css('input'));
  return input.sendKeys(text);
}

async function updateProductNameInDetailView() {
  // Assumes that the current view is the Product details view.
  addToProductName(nameSuffix);

  let Product = await Product.fromDetail(getPageElts().ProductDetail);
  expect(Product).toEqual({id: targetProduct.id, name: newProductName});
}

function expectHeading(hLevel: number, expectedText: string): void {
  let hTag = `h${hLevel}`;
  let hText = element(by.css(hTag)).getText();
  expect(hText).toEqual(expectedText, hTag);
};

function getProductLiEltById(id: number): ElementFinder {
  let spanForId = element(by.cssContainingText('li span.badge', id.toString()));
  return spanForId.element(by.xpath('..'));
}

async function toProductArray(allProductes: ElementArrayFinder): Promise<Product[]> {
  let promisedProductes = await allProductes.map(Product.fromLi);
  // The cast is necessary to get around issuing with the signature of Promise.all()
  return <Promise<any>> Promise.all(promisedProductes);
}