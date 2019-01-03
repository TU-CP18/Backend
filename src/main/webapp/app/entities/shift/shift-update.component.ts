import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IShift } from 'app/shared/model/shift.model';
import { ShiftService } from './shift.service';
import { ICar } from 'app/shared/model/car.model';
import { CarService } from 'app/entities/car';
import { ISafetyDriver } from 'app/shared/model/safety-driver.model';
import { SafetyDriverService } from 'app/entities/safety-driver';

@Component({
    selector: 'jhi-shift-update',
    templateUrl: './shift-update.component.html'
})
export class ShiftUpdateComponent implements OnInit {
    shift: IShift;
    isSaving: boolean;

    start: any;
    end: any;

    earliestDate: Date;

    cars: ICar[];

    safetydrivers: ISafetyDriver[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private shiftService: ShiftService,
        private carService: CarService,
        private safetyDriverService: SafetyDriverService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ shift }) => {
            this.shift = shift;
        });
        this.carService.getActiveCars().subscribe(
            (res: HttpResponse<ICar[]>) => {
                this.cars = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.safetyDriverService.query().subscribe(
            (res: HttpResponse<ISafetyDriver[]>) => {
                this.safetydrivers = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );

        this.start = { date: null, time: null };
        this.end = { date: null, time: null };

        this.earliestDate = new Date(Date.now() - 1000 * 60 * 60 * 24);
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.shift.id !== undefined) {
            this.subscribeToSaveResponse(this.shiftService.update(this.shift));
        } else {
            this.shift.start = new Date(this.combineDateAndTime(this.start)).getTime();
            this.shift.end = new Date(this.combineDateAndTime(this.end)).getTime();

            this.subscribeToSaveResponse(this.shiftService.create(this.shift));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IShift>>) {
        result.subscribe(
            (res: HttpResponse<IShift>) => this.onSaveSuccess(),
            (res: HttpErrorResponse) => {
                this.onSaveError();
                this.onError(res.message);
            }
        );
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackCarById(index: number, item: ICar) {
        return item.id;
    }

    trackSafetyDriverById(index: number, item: ISafetyDriver) {
        return item.id;
    }

    getLocalDateTime(time: number) {
        const year: any = new Date(time).getFullYear();
        let month: any = new Date(time).getMonth() + 1;
        let day: any = new Date(time).getDate();
        let hour: any = new Date(time).getHours();
        let minute: any = new Date(time).getMinutes();

        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (minute < 10) {
            minute = '0' + minute;
        }
        return year + '-' + month + '-' + day + 'T' + hour + ':' + minute;
    }

    combineDateAndTime(date_time) {
        return date_time.date + 'T' + date_time.time;
    }

    checkDateInputStart(event) {
        const input_date_str = event.target.value;
        const input_date = new Date(input_date_str);

        if (input_date < this.earliestDate || input_date_str === '') {
            this.start.date = null;
        } else {
            this.end.date = this.start.date;
        }
    }

    checkDateInputEnd(event) {
        const input_date_str = event.target.value;
        const input_date = new Date(input_date_str);

        if (input_date < new Date(this.start.date)) {
            this.end.date = this.start.date;
        }
    }
}
