import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchComponent } from './search.component';
import { ProductService } from '../../../shared/services/product.service';
import { of, throwError } from 'rxjs';
import { LIST_PRODUCTS } from '../../fixtures/product.fixtures';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let productService: ProductService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SearchComponent],
      providers: [
        {
          provide: ProductService,
          useValue: {
            getProducts: () => {
              return of(LIST_PRODUCTS);
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    productService = TestBed.inject(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrun products', () => {
    component.fetchProducts();
    expect(component.foundProduct).toEqual(LIST_PRODUCTS);
  });

  it('shoul retrun error', () => {
    spyOn(productService, 'getProducts').and.returnValue(
      throwError({ error: 500 })
    );
    component.fetchProducts();
    expect(component.errorGetProduct).toEqual(true);
  });
});
