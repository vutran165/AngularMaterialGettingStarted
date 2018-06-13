import { Component, OnInit, Injectable } from '@angular/core';
import {MatTreeNestedDataSource, MatTreeFlattener, MatTreeFlatDataSource} from '@angular/material/tree';
import { NestedTreeControl, FlatTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, of as observableOf, Observable } from 'rxjs';

// FileNode...
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

// FileFlatNode
export class FileFlatNode {
  filename: string;
  type: any;
  level: number;
  expandable: boolean;
}


const TREE_DATA = `
  {
    "Documents": {
      "angular": {
        "src": {
          "core": "ts",
          "compiler": "ts"
        }
      },
      "material2": {
        "src": {
          "button": "ts",
          "checkbox": "ts",
          "input": "ts"
        }
      }
    },
    "Downloads": {
        "Tutorial": "html",
        "November": "pdf",
        "October": "pdf"
    },
    "Pictures": {
        "Sun": "png",
        "Woods": "jpg",
        "Photo Booth Library": {
          "Contents": "dir",
          "Pictures": "dir"
        }
    },
    "Applications": {
        "Chrome": "app",
        "Calendar": "app",
        "Webstorm": "app"
    }
  }`;

  @Injectable()
  export class FileDatabase {
    dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);
    get data(): FileNode[] { return this.dataChange.value ;}

    constructor() {
      this.initialize();
    }

    initialize () {
      const dataObject = JSON.parse(TREE_DATA);

      const data = this.buildFileTree(dataObject, 0);

      this.dataChange.next(data);
    }

    buildFileTree(value: any, level: number): FileNode[] {
        let data: any[] = [];
        for (let i in value) {
           let v = value[i];
           let node = new FileNode();
           node.filename = '${i}';
           if (v === null || v === undefined) {

            } else if (typeof v === 'object') {
              node.children = this.buildFileTree(v, level + 1);
            } else {
              node.type = v;
            }
            data.push(node);
        }
        return data;
    }
  }


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

   treeControl: FlatTreeControl<FileFlatNode>;

   treeFlattener: MatTreeFlattener<FileNode, FileFlatNode>;

   dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;

  constructor(database: FileDatabase) {

    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);

      this.treeControl = new FlatTreeControl<FileFlatNode>(this._getLevel, this._isExpandable);

      this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

      database.dataChange.subscribe(data => {
        this.dataSource.data = data;
      });

   }

  transformer = (node: FileNode, level: number) => {

      let flatNode = new FileFlatNode();
      flatNode.filename = node.filename;
      flatNode.type = node.type;
      flatNode.level = level;
      flatNode.expandable = !!node.children;
      return flatNode;
  }

  private _getLevel = (node: FileFlatNode) => {
    return node.level;
  }

  private _isExpandable = (node: FileFlatNode) => {
    return node.expandable;
  }

  private _getChildren = (node: FileNode): Observable<FileNode[]> => {
    return observableOf(node.children);
  }


  hasChild = (_: number, _nodeData: FileFlatNode);

  ngOnInit() {
  }

}
