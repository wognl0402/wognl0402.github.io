# Data files for modular content

Edit these files to add or update content. Changes appear automatically (no build step).

## `awards.js` – Honors and Fellowships
```js
{ icon: "&#128509;", name: "Award Name", year: "2024" },
```

## `papers.js` – Publications
```js
{
  image: "images/paper.gif",
  title: "Paper Title",
  authors: ["Author A", "Author B"],
  boldAuthors: ["Jaehwi Jang"],  // optional
  equalNote: "*- equal contribution",  // optional
  venue: "Conference/Journal, Year",
  links: [{ label: "PDF", url: "..." }],
},
```

## `projects.js` – Projects
```js
{
  image: "images/project.gif",
  title: "Project Title",
  subtitle: "Subtitle",           // or subtitleHtml for links
  venue: "Venue, Year",           // optional
  description: "Plain text",      // or descriptionHtml for links
},
```

## `skills.js` – Skills (Additional Information)
```js
"Category:": "Item 1, Item 2, Item 3",
```
