import React from 'react'

function Form() {
  return (
    <div>
      <div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
        </div>
      </div>
    </div>
  )
}

export default Form   