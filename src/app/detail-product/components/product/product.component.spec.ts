import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductComponent } from './product.component';
import { ProductService } from '../../../shared/services/product.service';
import { DETAIL_PRODUCT } from '../../../shared/fixtures/detail.fixtures';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  const activatedRoute = jasmine.createSpyObj<ActivatedRoute>(
    'ActivatedRoute',
    ['params']
  ); // create mock object
  activatedRoute.params = of({ id: '123' });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [ProductComponent],
      providers: [
        {
          provide: ProductService,
          useValue: {
            getDetailProduct: () => {
              return DETAIL_PRODUCT;
            },
          },
        },
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
