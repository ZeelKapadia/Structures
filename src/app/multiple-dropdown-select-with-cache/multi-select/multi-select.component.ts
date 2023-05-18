import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetProduct } from '../cache/action/product.action';
import { ProductState } from '../cache/state/product.state';
import { Observable, Subscription } from 'rxjs';
import { product } from '../cache/Enum/product';


@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit, OnDestroy {

  protected websites: any[] = [
    { id: '1', name: 'ItSolutionStuff.com' },
    { id: '2', name: 'HDTuto.com' },
    { id: '3', name: 'Nicesnippets.com' },
    { id: '4', name: 'Google.com' },
    { id: '5', name: 'laravel.com' },
    { id: '6', name: 'npmjs.com' },
    { id: '7', name: 'Google2.com' },
  ];


  @Select(ProductState.getProductList) products$: Observable<product[]>
  @Select(ProductState.getProductListLoaded) productsLoaded$: Observable<Boolean>;

  projectSubscribe: Subscription;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.projectSubscribe = this.productsLoaded$.subscribe(productsLoaded => {
      if (!productsLoaded) {
        this.store.dispatch(new GetProduct())
      }
    })
    this.products$.subscribe((resp: product[]) => {
      this.websites = resp
    })
  }

  ngOnDestroy(): void {
    this.projectSubscribe.unsubscribe();
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
