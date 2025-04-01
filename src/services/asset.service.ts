import { Injectable } from '@angular/core';
import { Asset } from '../components/models/asset';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  // Mock data - in a real app this would come from an API
  private assets: Asset[] = [
    {
      id: 'B101WM_01',
      name: 'B101WM_01',
      description: 'Axial Expansion Joint',
      imageUrls: ['https://contram.ee/wp-content/uploads/2020/09/01-02-steel-bellows-expansion-joints-1536x1190.jpg','https://tse2.mm.bing.net/th?id=OIP.A8-OCmdlxN3ioZqc5ctIYAHaHU&pid=Api&P=0&h=180','https://tse3.mm.bing.net/th?id=OIP.hrGV9Gvi70GUgG3AfQenXAHaHa&pid=Api&P=0&h=180'], // ✅ Change to an array
      status: 'ok' ,
      plant: 'Plant A'
    },
    {
      id: 'WR1118S',
      name: 'Expansion Joint WR1118S',
      description: 'Uga Lab',
      imageUrls: ['https://contram.ee/wp-content/uploads/2020/09/01-02-steel-bellows-expansion-joints-1536x1190.jpg','https://tse2.mm.bing.net/th?id=OIP.A8-OCmdlxN3ioZqc5ctIYAHaHU&pid=Api&P=0&h=180','https://tse3.mm.bing.net/th?id=OIP.hrGV9Gvi70GUgG3AfQenXAHaHa&pid=Api&P=0&h=180'], // ✅ Change to an array
      status: 'ok',
      plant: 'Plant B'
    },
    {
      id: 'P7510FA0-2',
      name: 'Expansion Joint P7510FA0-2',
      description: 'Uga Lab',
      imageUrls:['https://contram.ee/wp-content/uploads/2020/09/01-02-steel-bellows-expansion-joints-1536x1190.jpg','https://tse2.mm.bing.net/th?id=OIP.A8-OCmdlxN3ioZqc5ctIYAHaHU&pid=Api&P=0&h=180','https://tse3.mm.bing.net/th?id=OIP.hrGV9Gvi70GUgG3AfQenXAHaHa&pid=Api&P=0&h=180'], // ✅ Change to an array
      status: 'ok',
      plant: 'Plant C'
    },
    {
      id: 'gauge-1',
      name: 'Pressure Gauge',
      description: 'Monitoring Device',
      imageUrls: ['https://contram.ee/wp-content/uploads/2020/09/01-02-steel-bellows-expansion-joints-1536x1190.jpg','https://tse2.mm.bing.net/th?id=OIP.A8-OCmdlxN3ioZqc5ctIYAHaHU&pid=Api&P=0&h=180','https://tse3.mm.bing.net/th?id=OIP.hrGV9Gvi70GUgG3AfQenXAHaHa&pid=Api&P=0&h=180'], // ✅ Change to an array
      status: 'ok',
      plant: 'Plant A'
    },
    {
      id: 'stand-1',
      name: 'Equipment Stand',
      description: 'Support Structure',
      imageUrls: ['https://contram.ee/wp-content/uploads/2020/09/01-02-steel-bellows-expansion-joints-1536x1190.jpg','https://tse2.mm.bing.net/th?id=OIP.A8-OCmdlxN3ioZqc5ctIYAHaHU&pid=Api&P=0&h=180','https://tse3.mm.bing.net/th?id=OIP.hrGV9Gvi70GUgG3AfQenXAHaHa&pid=Api&P=0&h=180'], // ✅ Change to an array
      status: 'ok',
      plant: 'Plant B'
    },
    {
      id: 'joint-4',
      name: 'Advanced Joint',
      description: 'High Pressure',
      imageUrls:['https://contram.ee/wp-content/uploads/2020/09/01-02-steel-bellows-expansion-joints-1536x1190.jpg','https://tse2.mm.bing.net/th?id=OIP.A8-OCmdlxN3ioZqc5ctIYAHaHU&pid=Api&P=0&h=180','https://tse3.mm.bing.net/th?id=OIP.hrGV9Gvi70GUgG3AfQenXAHaHa&pid=Api&P=0&h=180'], // ✅ Change to an array
      status: 'ok',
      plant: 'Plant C'
    }
  ];
  

  getAssets(): Observable<Asset[]> {
    return of(this.assets);
  }
}
