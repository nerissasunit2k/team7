import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { StudentTableComponent } from "./components/dashboard/childcomponents/student-table/student-table.component";
import { RecordTableComponent } from "./components/dashboard/childcomponents/record-table/record-table.component";
import { MonthlyAnalyticsComponent } from "./components/dashboard/childcomponents/monthly-analytics/monthly-analytics.component";
import { AnualAnalyticsComponent } from "./components/dashboard/childcomponents/anual-analytics/anual-analytics.component";
import { FormComponent } from "./components/dashboard/childcomponents/form/form.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "home",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "",
        redirectTo: "student-list",
        pathMatch: "full"
      },
      {
        path: "student-list",
        component: StudentTableComponent
      },
      {
        path: "record/:id",
        component: RecordTableComponent
      },
      {
        path: "monthly-analytics",
        component: MonthlyAnalyticsComponent
      },
      {
        path: "anual-analytics",
        component: AnualAnalyticsComponent
      },
      {
        path: "form",
        component: FormComponent
      },
      {
        path: "payCounterpart/:id",
        redirectTo: "form"
      }
    ]
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
