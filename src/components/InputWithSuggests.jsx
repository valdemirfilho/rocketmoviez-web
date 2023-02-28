import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .search-inner {
    width: 100%;
    background-color: ${({ theme }) => theme.BLACK_PINK_SALMON};
    border-radius: 10px;

    &:focus-within {
      outline: 1px solid ${({ theme }) => theme.PINK_SALMON_200};
    }

    &:not(:has(:placeholder-shown)) {
      outline: 1px solid ${({ theme }) => theme.PINK_SALMON_100};
    }

    &:has(:not(:placeholder-shown):focus-visible:invalid)  {
      outline: 1px solid red;
    }
  }

  input {
    font-size: 16px;
    height: 56px;
    width: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme.WHITE};
    border: none;
    outline: none;
    padding-left: ${({ pd }) => pd ? 20 : 0}px;
    padding-right: 20px;

    &::placeholder {
      color: ${({ theme }) => theme.LIGHT_GRAY};
    }
  }

  > svg {
    margin: 0 16px;
    color: ${({ theme }) => theme.LIGHT_GRAY};
  }

  .dropdown {
    position: absolute;
    top: 58px;
    padding: 8px 20px;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    border-radius: 0 0 8px 8px;
    backdrop-filter: blur(4px);
    max-height: 250px;
    overflow-y: auto;
    border: 1px solid ${({ theme }) => theme.PINK_SALMON_200};
    border-top: none;
  }

  .dropdown-row {
    color: ${({ theme }) => theme.PINK_SALMON_200};
    padding: 4px;
  }

  .dropdown-row:hover {
    color: ${({ theme }) => theme.PINK_SALMON_100};
    // color: ${({ theme }) => theme.WHITE};
    cursor: pointer;
  }
`

export function InputWithSuggests({
  icon: Icon,
  results,
  showDropdown,
  handleClick,
  handleDescription,
  handleTags,
  handleCover,
  handleMovieId,
  ...rest
}) {
  function renderItem(item) {
    return item.split("|")[0]
  }

  return (
    <Container pd={rest.pd}>
      <div className="search-inner">
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </div>

      {showDropdown && results.length > 0 &&
        <div className="dropdown">
          {results.map(item => (
            <div
              key={item.id}
              className="dropdown-row"
              onClick={() => {
                handleClick(renderItem(item.title))
                handleDescription(item.overview)
                handleTags([
                  item.release_date.split("-")[0],
                  item.saga,
                  `Fase ${item.phase}`,
                ])
                handleCover(item.cover_url)
                handleMovieId(item.id)
              }}
            >
              {renderItem(item.title)}
            </div>
          ))}
        </div>
      }

    </Container>
  )
}
