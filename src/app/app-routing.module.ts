import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./shared/services/auth.guard";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "home",
    canActivate: [AuthGuard],
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  { path: "*", pathMatch: "full", redirectTo: "sign-up" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
