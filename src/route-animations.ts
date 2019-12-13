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
          animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition("players => game", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateX(100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(-100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition("game => players", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateX(-100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition("game => scores", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateY(100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateY(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(-100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition("players => add", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateY(100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateY(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(-100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition("scores => players", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateY(-100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateY(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition("players => scores", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateY(100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translate(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(-100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition("scores => add", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateX(-100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition("add => players", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateY(-100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateY(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition("players => tutorial", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateY(100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateY(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(-100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),
  transition("tutorial => players", [
    query(":enter, :leave", style({ position: "fixed", width: "100%" }), {
      optional: true
    }),
    group([
      query(
        ":enter",
        [
          style({ transform: "translateY(-100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateY(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateY(100%)" }))
        ],
        { optional: true }
      )
    ])
  ])
]);
