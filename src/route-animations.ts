import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from "@angular/animations";
export const slideInAnimations = trigger("routeAnimations", [
  transition("home => players", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateX(-100%)" }),
          animate("1s ease-in-out", style({ transform: "translateX(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate(
            "1s ease-in-out",
            style({ opacity: "0", transform: "translateX(100%)" })
          )
        ],
        { optional: true }
      )
    ])
  ])
]);
