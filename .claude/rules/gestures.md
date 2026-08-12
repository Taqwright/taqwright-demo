# Rule: gestures

Scroll a target into view before any gesture that needs a fully-visible element
(`longPress`, `doubleTap`, `pinchIn`/`pinchOut`). The established pattern, and
why each option is there:

```ts
await target.scrollIntoView({
  direction: 'down',
  forceGesture: true,
  from: { x: 0.99 },   // swipe along the right edge — avoids the card's own gesture area
  to: { x: 0.99 },
  maxAttempts: 10,
  bottomMargin: 0.2,   // lift the target ≥20% clear of the bottom edge
});
```

Reuse it as-is rather than inventing new scroll parameters. The `x: 0.99` edge
swipe and the `bottomMargin` are both load-bearing: without them the scroll
gesture gets swallowed by the swipeable card under the finger, or the gesture
lands on a partially-clipped target.

Gestures available on a locator include `click`, `fill`, `longPress`,
`doubleTap`, `swipeLeft`/`swipeRight`, `pinchIn`/`pinchOut`, and `dragTo(target)`.
Prefer them over composing raw pointer actions.
