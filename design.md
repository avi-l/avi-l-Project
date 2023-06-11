# Component Design: App

## Purpose

The `App` component serves as the entry point of the application and renders the main layout.

## Design Specifications

### Layout

- The component should fill the entire height and width of the screen.
- The background color should be black.
- The layout should be displayed as a flex column.

### TopBar

- The `TopBar` component should be rendered at the top of the layout.

### Routes

- The `Routes` component should be rendered below the `TopBar`.
- It should handle routing and display different components based on the current URL path.

### DisplayData

- The `DisplayData` component is responsible for rendering the fetched data.
- It should be contained within a scrollable container.

### Loading State

- If the data is still loading, a spinner should be displayed in the center of the component.

### LotrCard

- The `LotrCard` component represents a single card displaying information about a movie, character, or quote.
- The card should have a dark background color and text color of yellow.

### Image

- The card should display an image related to the data (e.g., a movie poster, character image, etc.).

### Data Display

- The component should conditionally render the appropriate data details based on the selected `dataType`.
- If the `dataType` is "movie", the `DisplayMovieDetails` component should be rendered.
- If the `dataType` is "character", the `DisplayCharacterDetails` component should be rendered.
- If the `dataType` is "quote", the `DisplayQuoteDetails` component should be rendered.

### Scrollable Container

- The container for displaying the cards should be scrollable if the content exceeds the container's height.
- The container should have a scrollbar with a height of 2px.
- The scrollbar thumb should have a background color of rgba(255, 255, 255, 0.3) and a border radius of 4px.

### Ellipsis

- Text within the cards that overflows the available space should be truncated with an ellipsis.

## Usage Example

```jsx
import { DisplayData, TopBar } from "./components";

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-black d-flex flex-column">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<DisplayData />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
```
