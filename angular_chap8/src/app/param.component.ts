import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  template: `
  <ul>
  <li>クエリ情報：{{query}}</li>
  <li>フラグメント：{{fragment}}</li>
  `
})
export class ParamComponent implements OnInit {
  query = '';
  fragment = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => this.query = `${params['category']}/${params['keyword']}`
    );
    this.route.fragment.subscribe(
      frag => this.fragment = frag
    );
    console.log(this.route.queryParams, this.route.fragment)
  }
}