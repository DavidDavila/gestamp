import { NgRedux, select } from "@angular-redux/store";
import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { PAGINATION } from "../../../models/pagination.dto";
import { TOPICS } from "../../../models/topics.dto";
import { IAppState } from "../../../redux/store";
import { ApprovementService } from "./approvement.service";

@Component({
  selector: "app-approvement",
  templateUrl: "./approvement.component.html",
  styleUrls: ["./approvement.component.scss"],
})
export class ApprovementComponent implements OnInit, OnDestroy {
  public topics: TOPICS[];
  public random: number;
  private totalTopics: number;
  subLang: any;
  interval: any;

  @ViewChild("topicBoxes") topicBoxes;

  @select(["lang"])
  readonly lang$: Observable<any>;
  constructor(
    private _approvementService: ApprovementService,
    private _ngRedux: NgRedux<IAppState>
  ) {
    this.subLang = this.lang$.subscribe((val) => {
      if (val) {
        this.getTopics();
      }
    });
  }
  ngOnDestroy(): void {
    this.subLang && this.subLang.unsubscribe();
  }
  async ngOnInit() {
    await this.getTopics();
    this.getRandomTopic();
  }
  getTopics() {
    return new Promise(async (res, rej) => {
      try {
        let apicall = (await this._approvementService.getTopics()) as [
          pagination: PAGINATION,
          topics: TOPICS[]
        ];
        this.topics = apicall[1];
        this.totalTopics = apicall[0].total;
        res();
      } catch (error) {
        rej(error);
      }
    });
  }
  getRandomTopic() {
    //TODO: Que no se repitan los topics hasta que no se hayan visto todos
    this.random = Math.floor(Math.random() * (this.totalTopics - 1)) + 0;
    if (!this.topics[this.random] || !!!this.topics[this.random].sourceNote) {
      return this.getRandomTopic();
    }
    const hasVisible = this.topicBoxes.nativeElement.querySelector(".fade-out");

    hasVisible && hasVisible.classList.remove("fade-out");
  }
}
