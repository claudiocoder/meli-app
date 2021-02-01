import { fakeAsync, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { LIST_PRODUCTS } from '../fixtures/product.fixtures';
import { DETAIL_PRODUCT } from '../fixtures/detail.fixtures';
import { environment } from '../../../environments/environment';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should be a successful getProducts', () => {
    service.getProducts('xbox').subscribe((response) => {
      expect(response).toEqual(LIST_PRODUCTS);
    });

    const req = httpMock.expectOne(
      `${environment.URL_BASE}/api/items?query=xbox`
    );
    expect(req.request.method).toBe('GET');
    req.flush(LIST_PRODUCTS);
  });

  it('Should be a successful detail products', () => {
    service.getDetailProduct('MLA899752125').subscribe((response) => {
      expect(response).toEqual(DETAIL_PRODUCT);
    });

    const req = httpMock.expectOne(
      `${environment.URL_BASE}/api/items/MLA899752125`
    );
    expect(req.request.method).toBe('GET');
    req.flush(DETAIL_PRODUCT);
  });
});
