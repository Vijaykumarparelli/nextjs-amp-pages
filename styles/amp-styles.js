const spacing = {
  0: '0px',
  1: '.25rem',
  2: '.5rem',
  3: '1rem',
  4: '1.5rem',
  5: '2.5rem',
};
const textAlgin = {
  left: 'left',
  center: 'center',
  right: 'right',
};
export const ampStyles = `
:root {
  --primary: #f59e0b;
  --primary-light: #fef3c7;
  --secondary: #374151;
}
body {
  font-family: 'Roboto', sans-serif;
} 
.container { 
  margin: auto;
  padding: 0 15px;
}
.text-primary {
  color: var(--primary);
}
.d-none {
  display: none;
}
.d-flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.col {
  width: calc((100%) - 2rem);
  padding: 0 1rem; 
}
@media (min-width: 560px) {
  .col {
    width: calc((100% / 2) - 2rem);
  }
}
@media (min-width: 768px) {
  .col {
    width: calc((100% / 3) - 2rem);
  }
}
@media (min-width: 1200px) {
  .col {
    width: calc((100% / 4) - 2rem);
  }
}
.card {
  padding: 13px;
  border: 1px solid #3f69ab;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #00000036;
}
.card img {
  border-radius: 8px 8px 0 0;
}
.card h2 {
  font-size: 20px;
}
.truncate {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 24px; 
}
.truncate.line_one {
  height: 20px;
  -webkit-line-clamp: 1;
}

 ${Object.keys(spacing).map((v) => {
   return `
    .p-${v}{
        padding: ${spacing[v]};
    }
    .ps-${v}{
        padding-left: ${spacing[v]};
    }
    .pe-${v}{
        padding-right: ${spacing[v]};
    }
    .pt-${v}{
        padding-top: ${spacing[v]};
    }
    .pb-${v}{
        padding-bottom: ${spacing[v]};
    }
    .px-${v}{
        padding-left: ${spacing[v]};
        padding-right: ${spacing[v]};
    }
    .py-${v}{
        padding-top: ${spacing[v]};
        padding-bottom: ${spacing[v]};
    }
    .m-${v}{
        margin: ${spacing[v]}
    }
    .ms-${v}{
        margin-left: ${spacing[v]};
    }
    .me-${v}{
        margin-right: ${spacing[v]};
    }
    .mt-${v}{
        margin-top: ${spacing[v]};
    }
    .mb-${v}{
        margin-bottom: ${spacing[v]};
    }
    .mx-${v}{
        margin-left: ${spacing[v]};
        margin-right: ${spacing[v]};
    }
    .my-${v}{
        margin-top: ${spacing[v]};
        margin-bottom: ${spacing[v]};
    } `;
 })}
 ${Object.keys(textAlgin).map((v) => {
   return `
    .text-${v}{
      text-align: ${textAlgin[v]};
    }`;
 })}
.d-flex {
  display: flex;
}.items-center {
  align-items:center;
}.flex-wrap {
  flex-wrap: wrap;
}
.text-gray {
  color: #889097;
}
.text-small {
  font-size: 13px;
}
 
@media (max-width: 768px) {
  .mobile-vertical {
    flex-direction: column;
    }
}
`;
